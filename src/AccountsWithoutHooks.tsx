import { useState, useEffect } from "react";
import { accounts } from "./mockAccounts";
import Account from "./Account";
import * as S from "./style";

function Accounts() {
    const [accountList, setAccountList] = useState<typeof accounts | undefined>();
    const [activeAccountList, setActiveAccountList] = useState<typeof accounts | undefined>();
    const [amountOfOldPeople, setAmountOfOldPeople] = useState(0);

    useEffect(() => {
        fetchUserList();
    }, []);

    useEffect(() => {
        initializeActiveUserList();
        calculateAmountOfOldPeople();
    }, [accountList]);

    const fetchUserList = () => {
        new Promise((resolve) => {
            setTimeout(() => {
                setAccountList(accounts);
                resolve("success");
            }, ONE_SECOND);
        });
    };

    const initializeActiveUserList = () => {
        setActiveAccountList(accountList?.filter(({ isActive }) => isActive));
    };

    const calculateAmountOfOldPeople = () => {
        let oldPeopleCounter = 0;
        accountList?.forEach((account) => (oldPeopleCounter += account.age >= 30 ? 1 : 0));
        setAmountOfOldPeople(oldPeopleCounter);
    };

    return (
        <S.List>
            <S.Header>There are {amountOfOldPeople} old people</S.Header>
            {activeAccountList?.map(({ id, firstName, lastName, age }) => (
                <Account key={id} firstName={firstName} lastName={lastName} age={age} />
            ))}
        </S.List>
    );
}

const ONE_SECOND = 1000;

export default Accounts;
