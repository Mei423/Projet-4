export class UserInfo {
    id: number;
    userName: string;
    password: string;

    getFullName(): string {
        return this.id + ' ' + this.userName;
      }
    
}