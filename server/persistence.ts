// TODO: implement SQLite persistence
export interface UserProfile {
  id: string;
  name: string;
  chips: number;
}

export class Persistence {
  private users = new Map<string, UserProfile>();

  getUser(id: string): UserProfile | undefined {
    return this.users.get(id);
  }

  saveUser(profile: UserProfile) {
    this.users.set(profile.id, profile);
  }
}
