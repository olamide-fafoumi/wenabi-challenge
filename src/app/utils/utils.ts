
export const BASE_API_URL = `https://6143a763c5b553001717d062.mockapi.io/api`;

export const GET_ALL_WISHES_ENDPOINT = '/wishes';

export const GET_STATS_ENDPOINT = '/stats';

export function remapStatus(status: string) {
    let correctStatus: string;

    switch (status) {
        case "APPLICATION":
            correctStatus = "Candidature";
            break;
        case "DISCUSSION":
            correctStatus = "Echange";
            break;
        case "WAITING_ASSOCIATION_VALIDATION":
            correctStatus = "Date à valider";
            break;
        case "WAITING_MANAGER_VALIDATION":
            correctStatus = "En attente du manager";
            break;
        case "IN_PROGRESS":
            correctStatus = "En cours";
            break;
        case "USER_HAS_PARTICIPATED":
            correctStatus = "A participé";
            break;
        case "CANCELLED":
            correctStatus = "Annulé / refusé / non finalisé";
            break;
        default:
            correctStatus = "";
            break;
    }

    return correctStatus;
}
