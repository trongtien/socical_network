from fastapi import FastAPI
from app.server.routes.student import router as StudentRouter

app = FastAPI()

app.include_router(StudentRouter, tags=["Student"], prefix="/student")

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}

@router.post("/", response_description="Student data added into the database")
async def add_student_data(student: StudentSchema = Body(...)):
    student = jsonable_encoder(student)
    new_student = await add_student(student)
    return ResponseModel(new_student, "Student added successfully.")