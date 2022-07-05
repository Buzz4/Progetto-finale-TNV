namespace ReviewApp.RestAPI.Model
{
    public class ReviewContract
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MovieId { get; set; }
        public string Recensione { get; set; }
    }
}
