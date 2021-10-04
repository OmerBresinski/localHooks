import * as S from "./style";

interface AccountProps {
    firstName: string;
    lastName: string;
    age: number;
}

const Account = ({ firstName, lastName, age }: AccountProps) => {
    return (
        <S.Account>
            {firstName} {lastName} - {age}
        </S.Account>
    );
};

export default Account;
