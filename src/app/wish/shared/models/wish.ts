export interface IWish {
    id: string;
    status: string;
    createdDate: Date;
    volunteerProfile: IVolunteer;
    coordinatorProfile: ICoordinator;
    initiative: IInitiative;
    entries?: IEntry[];
}

interface IVolunteer extends IIdentity {
    company: ICompany;
}

interface ICompany {
    name: string;
}

interface ICoordinator extends IIdentity {
}

interface IInitiative {
    title: string;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
}

interface IEntry {
    dateBegin: string;
    dateEnd: string;
}

interface IIdentity {
    firstname: string;
    lastname: string;
}