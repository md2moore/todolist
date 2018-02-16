namespace todolist_backend.Models
{
    public class Todo
    {  
        public int Id { get; set; }
        public string Text { get; set; }
        public bool Edit { get; set; }
        public string EditText { get; set; }

        public Todo(int id, string text){
            this.Id = id;
            this.Text = text;
            this.Edit = false;
            this.EditText = "";
        }

        public Todo(){
            
        }
    }
}