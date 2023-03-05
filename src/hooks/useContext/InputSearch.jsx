import React, { useState, createContext,useContext } from 'react';


export const MyContextSearch = createContext();


export const useMyContextSearch = () => { 
    return useContext(MyContextSearch)
}