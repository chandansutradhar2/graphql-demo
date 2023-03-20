
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface User {
    firstName: string;
}

export interface Course {
    id?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    rate?: Nullable<number>;
    createdBy: string;
    subscribedBy?: Nullable<User>;
    reviews?: Nullable<Review>;
}

export interface Review {
    createdBy: string;
    createdOn: number;
    comment?: Nullable<string>;
    rating?: Nullable<number>;
}

export interface IQuery {
    courses(): Course[] | Promise<Course[]>;
    course(id: number): Course | Promise<Course>;
}

type Nullable<T> = T | null;
