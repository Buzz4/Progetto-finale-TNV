namespace ReviewApp.RestAPI.Model
{
    public class UpdateReviewContract
    {
        public int UserId { get; set; }
        public int MovieId { get; set; }        
        public string Recensione { get; set; }
    }
}
