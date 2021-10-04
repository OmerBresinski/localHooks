import { useState, useEffect } from "react";
import { accounts } from "./mockAccounts";

export const useFetchAccounts = () => {
    const [accountList, setAccountList] = useState<typeof accounts | undefined>();

    useEffect(() => {
        fetchAccountList();
    }, []);

    const fetchAccountList = () => {
        new Promise((resolve) => {
            setTimeout(() => {
                setAccountList(accounts);
                resolve("success");
            }, ONE_SECOND);
        });
    };

    return { accountList, fetchAccountList };
};

const ONE_SECOND = 1000;
