import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

  import {Todo} from "./todo"
  import { TodoCreationParams,TodoService } from "./todoServices";

  @Route("todo")
  export class TodoController extends Controller{
    @Get("{todoId}")
    public async getTodo(
        @Path() todoId:string
    ){
        let todoService = new TodoService();
        return todoService.get(todoId)
    }
  }