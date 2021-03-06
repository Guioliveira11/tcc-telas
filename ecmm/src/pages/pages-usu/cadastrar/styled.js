import styled from "styled-components"; 

const Div = styled.div`
    .area {
        background-image: url("/assets/images/background.png");
        padding: 300px 0px;
    }

    .caixa {
        text-align: center;
        background-color: #3C6E71;

        border-radius: 15px;

        margin: 0px 380px;
        padding-top: 30px;
    }

    .titulo {
        font-size: 37px;
        font-weight: bolder;
        color: #d9d9d9;

        margin-bottom: 15px;
    }

    .criar button {
        border-radius: 18px;
        border: none;

        padding: 10px 50px;
        margin-bottom: 40px;
        margin-top: 40px;

        color: #d9d9d9;
        font-weight: bolder;

        background-color: #609FA3;
    }

    .criar button:hover {
        cursor: pointer;
    }
`;

export { Div }