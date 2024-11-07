import React, { createContext, useState } from 'react';


export interface SliderContextType {
    creditAmount: number;
    autoTopUp: boolean;
    handleSliderValue: (value: number) => void;
    toggleAutoTopUp: (checked: boolean) => void;
    creditValue: number | undefined;
}

// create context 
export const SliderContext = createContext<SliderContextType | undefined >(undefined); 

interface SliderProviderProps {
    children: React.ReactNode;
};

// data 
interface CreditData {
    credit: number;
    amount: number;
}

const creditData : CreditData[] = [
    {
        credit:500,
        amount: 5
    },
    {
        credit:1200,
        amount: 10
    },
    {
        credit:1700,
        amount: 15
    },
    {
        credit:2500,
        amount: 20
    },
    {
        credit:3900,
        amount: 25
    },
    {
        credit:5000,
        amount: 30
    },
    
]

export const SliderProvider: React.FC<SliderProviderProps> = ({ children }) => {
    const [autoTopUp , setAutoTopUp] = useState<boolean>(true);
    const [creditAmount , setCreditAmount] = useState<number>(10);
    const [creditValue , setCreditValue] = useState<number>(1200);

    const toggleAutoTopUp = (checked: boolean) => {
        setAutoTopUp(checked);
    };

    const handleSliderValue = (value: number) => {
        setCreditAmount(value);
        const creditDetail = creditData?.find((obj) => obj.amount === value);
        if (creditDetail) {
            setCreditValue(creditDetail.credit);
        } else {
            setCreditValue(1200);
        }
    };

    return (
        <SliderContext.Provider value={{ autoTopUp, toggleAutoTopUp, creditAmount, handleSliderValue, creditValue }}>
            {children}
        </SliderContext.Provider>
    );

};