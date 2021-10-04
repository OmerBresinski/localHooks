import { useState, useEffect } from "react";
import { useFetchAccounts } from "./useFetchAccounts";

export const useActiveAccountList = () => {
    const { accountList } = useFetchAccounts();
    const [activeAccountList, setActiveAccountList] = useState<typeof accountList | undefined>();
    const [amountOfOldPeople, setAmountOfOldPeople] = useState(0);

    useEffect(() => {
        initializeActiveUserList();
    }, [accountList]);

    useEffect(() => {
        calculateAmountOfOldPeople();
    }, [activeAccountList]);

    const initializeActiveUserList = () => {
        setActiveAccountList(accountList?.filter(({ isActive }) => isActive));
    };

    const calculateAmountOfOldPeople = () => {
        if (activeAccountList) {
            setAmountOfOldPeople(activeAccountList.reduce((oldPeopleCounter, { age }) => (age >= 30 ? oldPeopleCounter + 1 : oldPeopleCounter), 0));
        }
    };

    return { activeAccountList, amountOfOldPeople };
};
