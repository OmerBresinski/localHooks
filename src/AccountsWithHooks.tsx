import { useAccountList } from "./useAccountList";
import Account from "./Account";
import * as S from "./style";

const AccountsWithHooks = () => {
    const { activeAccountList, amountOfOldPeople } = useAccountList();

    return (
        <S.List>
            <S.Header>There are {amountOfOldPeople} old people</S.Header>
            {activeAccountList?.map(({ id, firstName, lastName, age }) => (
                <Account key={id} firstName={firstName} lastName={lastName} age={age} />
            ))}
        </S.List>
    );
};

export default AccountsWithHooks;
