import React, { useState, createContext, useContext } from 'react';


export const MyAllCamps = createContext();


export const useMyAllCamps = () => {
    return useContext(MyAllCamps)
}