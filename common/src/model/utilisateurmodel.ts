import { Permission, rolePermissions } from '../enum';
import { Role } from '../enum/role';

export class UtilisateurModel {
    public utilisateurId: number;
    public username: string;
    public password?: string;
    public roles: Role[];

    constructor() {
        this.roles = [];
    }

    public static fromJSON(jsonUtilisateurModel: UtilisateurModel) {
        const utilisateurModel = new UtilisateurModel;
        Object.assign(utilisateurModel, jsonUtilisateurModel);
        return utilisateurModel;
    }

    public hasPermission(permission: Permission) {
        return this.roles.some(role => {
            return rolePermissions[role].includes(permission);
        });
    }
}
