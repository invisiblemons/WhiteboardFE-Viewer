export class Campaign {
    id: string;
    name: string;
    campusId: string;
    description: string;
    startDay: Date;
    endDay: Date;
    image: string;
    universityId: string;
    criterions: Criteria[];
    status: string;
    universityName: string;
    campusName: string;

    constructor(res) {
        if(null !== res) {
            this.id = res.id;
        this.name = res.name;
        this.campusId = res.campusId;
        this.description = res.description;
        this.startDay = res.startDay;
        this.endDay = res.endDay;
        this.image = res.image;
        this.universityId = res.universityId;
        this.criterions = res.criterions;
        this.status = res.status;
        this.universityName = res.universityName;
        this.campusName = res.campusName;
        }
    }
}

export class Criteria {
    id: string;
    name: string;
    campaignId: string;
    overallRating: number;
    ratings: number[];

    constructor() {
        this.id = "";
        this.name = "";
        this.campaignId = "";
        this.ratings =  [];
    }
}