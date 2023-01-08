mongostores data as very big object
{
    User:{
        id: 1,
        name: string,
        email: string,
        password: string,
        events:[{}],
        schedules:[{}]
    }
    Schedule:{
        user: this.User[id] ,
        day : new Date(),
        or  moment(),
        events: this.Events[id]
    },
    Events:{
        
    }
}