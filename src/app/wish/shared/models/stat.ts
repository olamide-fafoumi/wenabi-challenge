interface IStat {
    status: string;
    count: number;
}

export class Stat implements IStat {

    constructor(public status: string, public count: number) {
        switch (status) {
            case "APPLICATION":
                this.status = "Candidature";
                break;
            case "DISCUSSION":
                this.status = "Echange";
                break;
            case "WAITING_ASSOCIATION_VALIDATION":
                this.status = "Date à valider";
                break;
            case "WAITING_MANAGER_VALIDATION":
                this.status = "En attente du manager";
                break;
            case "IN_PROGRESS":
                this.status = "En cours";
                break;
            case "USER_HAS_PARTICIPATED":
                this.status = "A participé";
                break;
            case "CANCELLED":
                this.status = "Annulé / refusé / non finalisé";
                break;
            default:
                this.status = "";
                break;
        }
    }
}