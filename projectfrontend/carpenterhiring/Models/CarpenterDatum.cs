using System;
using System.Collections.Generic;

namespace carpenterhiring.Models;

public partial class CarpenterDatum
{
    public int Id { get; set; }

    public string UserName { get; set; } = null!;

    public string EmailId { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string? ServiceName { get; set; }

    public string? ServicePrice { get; set; }

    public string? ContactNumber { get; set; }

    public string? ServiceDate { get; set; }

    public string? ServiceHours { get; set; }
}
