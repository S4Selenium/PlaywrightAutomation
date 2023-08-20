import {  APIRequestContext, expect,request,test } from "@playwright/test";
let apiContext;
let userId;
let apiToken;

const getUserId = async () => {
    const apiRequestContext: APIRequestContext = await request.newContext();
    let url = "https://demoqa.com/Account/v1/Login";
    const response =await apiRequestContext.fetch(url,{
        method: 'post',
        data: {
            userName:"Admin",
            password:"Admin@123"
        },
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        }
    });
    console.log((await response.body()).toString('utf-8'))
    return JSON.parse((await response.body()).toString('utf-8'))
}

const getToken = async () => {
    const apiRequestContext: APIRequestContext = await request.newContext();
    let url = "https://demoqa.com/Account/v1/Login";
    const response =await apiRequestContext.fetch(url,{
        method: 'post',
        data: {
            userName:"Admin",
            password:"Admin@123"
        },
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
        }
    });
    return JSON.parse((await response.body()).toString('utf-8'))
}

test.beforeAll(async ({playwright})=>{
    let users = await getUserId();
    userId  = users['userId'];
    let token = users['token']; 
    
    apiContext = await playwright.request.newContext({
        baseURL:"https://demoqa.com/BookStore/v1/Books",
        extraHTTPHeaders: {
            "Authorization": "Bearer "+ token,
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Accept-Encoding":"gzip,deflate,br",
            "Accept-Language": "en-US,en;q=0.9"
        }
    });
});

test.afterAll(async ({ }) => {
    // Dispose all responses.
    await apiContext.dispose();
});

test('Adding new Book to user', async ({baseURL}) => {
    let url = "https://demoqa.com/BookStore/v1/Books";
    console.log(url)
    const response  =await apiContext.fetch(url,{
        method: 'post',
        data: {
            userId: userId,
            collectionOfIsbns:[
                {isbn:"9781449365035"}
            ]
        }
    });
    console.log(await response.json())
    expect(await response.status()).toBe(201);
    expect(await response.ok()).toBeTruthy();
});


test('Adding already existing book to User', async ({baseURL}) => {
    let url = "https://demoqa.com/BookStore/v1/Books";
    console.log(url)
    const response  =await  apiContext.fetch(url,{
        method: 'post',
        data: {
            userId: userId,
            collectionOfIsbns:[
                {isbn:"9781449365035"}
            ]
        }
    });
    expect(await response.status()).toBe(400);
});

test('Deleting newly added book from user', async ({baseURL}) => {
    let url = "https://demoqa.com/BookStore/v1/Books";
    console.log(url)
    const response  =await  apiContext.fetch(url,{
        method: 'delete',
        data: {
            userId: userId,
            collectionOfIsbns:[
                {isbn:"9781449365035"}
            ]
        }
    });
    expect(await response.status()).toBe(204);

});    


test('Trying to delete already deleted book from user', async ({baseURL}) => {
    let url = "https://demoqa.com/BookStore/v1/Books";
    console.log(url)
    const response  =await  apiContext.fetch(url,{
        method: 'delete',
        data: {
            userId: userId,
            collectionOfIsbns:[
                {isbn:"9781449365035"}
            ]
        }
    });
    expect(await response.status()).toBe(401);
});

//create 
/* test("Add Books",async({request,baseURL}) => {
    const _response = await request.post(`${baseURL}`+Books, {
        data: {
            "userId":"061e173b-678d-490a-b8c5-874a1c421809",
            "collectionOfIsbns":[
                {"isbn":"9781449365035"}
            ]
        }
    });
    let resBody = await _response.body();
    let responseCode = await _response.status();
    console.log(((await _response.body()).toJSON()))
    //expect(_response.status()).toBe(200);
    //expect(_response.ok()).toBeTruthy();

}) */