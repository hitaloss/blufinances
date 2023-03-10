import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
    width: 100%;
    padding: 18px 16px;
    border-radius: 5px;
    margin-bottom: 8px;

    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_darker};

    background-color: ${({theme}) => theme.colors.shape};
`;
