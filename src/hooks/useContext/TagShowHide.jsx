import React, { useState, createContext, useContext } from 'react';


export const MyTagShowHide = createContext();


export const useMyTagShowHide = () => {
    return useContext(MyTagShowHide)
}