export class Goal {
  id : number
  name :string
  description:string
  showDescription:Boolean

  constructor(id:number, name:string, description:string, public completeDate:Date){
    this.id = id;
    this.name = name;
    this.description = description;
    this.showDescription = false;
    
    
  }
}
