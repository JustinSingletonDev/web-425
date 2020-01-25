/*
============================================
; Title: Assignment 4.2
; Author: Justin Singleton
; Date: 22 January 2020
; Description: This program demonstrates the
; use of Inversion Control and Dependency
; Injection in an Angular project.
;===========================================
*/

export class Fruit {
  constructor(
    public id: number,
    public name: string,
    public color: string
    ) {}
}
