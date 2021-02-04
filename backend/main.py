from fastapi import FastAPI, HTTPException
from typing import Optional, List
from model import User
from database import (
    create_user,
    fetch_all_users,
    update_user,
    fetch_one_user,
    remove_user,
)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/users")
async def get_users():
    response = await fetch_all_users()
    return response


@app.post("/api/user/", response_model=User)
async def post_user(user: User):
    response = await create_user(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.put("/api/user/{user_id}/", response_model=User)
async def put_user(user_id: int, username: str, password: str):
    response = await update_user(user_id, username, password)
    if response:
        return response
    raise HTTPException(404, f"User not found")


@app.get("/api/user/{user_id}", response_model=User)
async def get_user_by_id(user_id):
    response = await fetch_one_user(user_id)
    if response:
        return response
    raise HTTPException(404, f"User not found")


@app.delete("/api/user/{user_id}")
async def delete_user(user_id):
    response = await remove_user(user_id)
    if response:
        return "Successfully removed users"
    raise HTTPException(404, f"User not found")