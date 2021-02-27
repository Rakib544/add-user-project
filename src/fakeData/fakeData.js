import { getDefaultNormalizer } from "@testing-library/react";

const FakeData = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "leanne@gmail.com",
        "phone": "1-770-736-8031 x56442",
        "annualSalary" : 1340000,
        "img" : "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      },
    {
        "id": 2,
        "name": "John Howell",
        "email": "ervin@gmail.com",
        "phone": "010-692-6593 x09125",
        "annualSalary" : 78200,
        "img" : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      },
    {
        "id" : 3,
        "name" : "Clementine",
        "email" : "clementine@gmail.com",
        "phone" : "111-023-899 x3456",
        "annualSalary": 25000,
        "img" : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        "id" : 4,
        "name" : "Patricia Lebsack",
        "email" : "particia@gmail.com",
        "phone" : "012453453463",
        "annualSalary": 43220,
        "img" : "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        "id" : 5,
        "name" : "John", 
        "email" : "john345@gmail.com", 
        "phone" : "8386347368213",
        "annualSalary": 100000,
        "img" : "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        "id" : 6,
        "name" : "Brock Lee",
        "email" : "brock4345@gmail.com",
        "phone" : "0845867894",
        "annualSalary" : 120956,
        "img" : "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        "id" : 7,
        "name" : "Drew Hays",
        "email" : "drewhays@gmail.com",
        "phone" : "94534232",
        "annualSalary" : 300000,
        "img" : "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        "id" : 8,
        "name": "Hust Wilson",
        "email" : "wilson@gmail.com",
        "phone" : "8457362873672",
        "annualSalary" : 120000,
        "img" : "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    {
        "id" : 9,
        "name" : "james Marty", 
        "email" : "marty@gmail.com", 
        "phone" : "439990995", 
        "annualSalary" : 34567, 
        "img" : "https://images.unsplash.com/photo-1440606797942-6cc04c045447?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fG1lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    }, 
    {
        "id" : 10,
        "name" : "Javier Reyes",
        "email" : "javire@gmail.com",
        "phone" : '57347232',
        "annualSalary" : 23456,
        "img" : "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODN8fG1lbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=600&q=60"
    }
]

export default FakeData;