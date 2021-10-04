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
        let oldPeopleCounter = 0;
        activeAccountList?.forEach((account) => (oldPeopleCounter += account.age >= 30 ? 1 : 0));
        setAmountOfOldPeople(oldPeopleCounter);
    };

    return { activeAccountList, amountOfOldPeople };
};
