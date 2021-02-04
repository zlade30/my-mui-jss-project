import motor.motor_asyncio
from model import User

client = motor.motor_asyncio.AsyncIOMotorClient()

db = client.userdb
collection = db.user


async def fetch_all_users():
    users = []
    cursor = collection.find({})
    async for document in cursor:
        users.append(User(**document))
    return users


async def create_user(user):
    document = user
    result = await collection.insert_one(document)
    return document


async def update_user(user_id, title, desc):
    await collection.update_one({"username": title}, {"$set": {"password": desc}})
    document = await collection.find_one({"user_id": user_id})
    return document


async def fetch_one_user(user_id):
    document = await collection.find_one({"user_id": user_id})
    return document


async def remove_user(user_id):
    await collection.delete_one({"user_id": user_id})
    return True