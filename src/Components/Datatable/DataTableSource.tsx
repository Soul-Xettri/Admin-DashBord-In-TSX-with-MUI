
export const userRows = [
    {
        id:1,
        username:"Snow",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"active",
        email:"1snow@gmail.com",
        age: 35,
    },
    {
        id:2,
        username:"Jamie Lannister",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"passive",
        email:"2snow@gmail.com",
        age: 31,
    },
    {
        id:3,
        username:"Lannister",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"active",
        email:"1lannir@gmail.com",
        age: 32,
    },
    {
        id:4,
        username:"White",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"pending",
        email:"white@gmail.com",
        age: 37,
    },
    {
        id:5,
        username:"Black",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"passive",
        email:"black@gmail.com",
        age: 22,
    },
    {
        id:6,
        username:"Red",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"pending",
        email:"red@gmail.com",
        age: 25,
    },
    {
        id:7,
        username:"Blue",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"active",
        email:"blue@gmail.com",
        age: 25,
    },
    {
        id:8,
        username:"Pink",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"active",
        email:"pink@gmail.com",
        age: 25,
    },
    {
        id:9,
        username:"Gold",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"pending",
        email:"gold@gmail.com",
        age: 29,
    },
    {
        id:10,
        username:"Soul",
        img:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
        status:"passive",
        email:"soul@gmail.com",
        age: 25,
    },
]

export const userColumns =[
    {field:"id",headerName:"ID",width:70},
    { field: "user", headerName: "User", width: 230, renderCell:(params:any)=>{
        return(
            <div className="cellWithImage">
                <img className = "cellImage" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    } },
    {field:"email",headerName:"Email",width:230},
    {field:"age",headerName:"Age",width:100},
    {field:"status",headerName:"Status",width:160,renderCell:(params:any)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }},
]