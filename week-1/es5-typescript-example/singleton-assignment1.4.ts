/*
============================================
; Title: Assignment 1.4
; Author: Justin Singleton
; Date: 20 December 2019
; Description: This program demonstrates the
; use of Typescript variables and 
; functions.
;===========================================
*/

let firstName: string = 'Justin';
let lastName: string = 'Singleton';

function myName(firstName: string, lastName: string): string {
    return 'Hello my name is ' + firstName + ' ' + lastName + '!';
}

console.log(myName(firstName, lastName));