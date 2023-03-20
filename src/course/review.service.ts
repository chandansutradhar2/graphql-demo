import { Injectable } from "@nestjs/common";

@Injectable()
export class ReviewService {

    reviews = [{
        createdOn: "12/12/2022",
        createdBy: "sameer",
        rating: 4,
        comment: "OK Course with proper content",
    }, {
        createdOn: "12/2/2022",
        createdBy: "ajay sharma",
        rating: 3.5,
        comment: "too fast",
    }, {
        createdOn: "13/05/2022",
        createdBy: "shalvi kapoor",
        rating: 4,
        comment: "i liked the course",
    }, {
        createdOn: "12/12/2022",
        createdBy: "guarang gaourisa",
        rating: 4.5,
        comment: "very easy to understand ",
    }];

    findAll(id: any) {
        return this.reviews;
    }
}