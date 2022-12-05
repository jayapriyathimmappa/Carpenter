using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace carpenterhiring.Models;

public partial class CarpenterHiringContext : DbContext
{
    public CarpenterHiringContext()
    {
    }

    public CarpenterHiringContext(DbContextOptions<CarpenterHiringContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CarpenterDatum> CarpenterData { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    
}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<CarpenterDatum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Carpente__3214EC27C51243BD");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ContactNumber)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Contact_Number");
            entity.Property(e => e.EmailId)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("EmailID");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ServiceDate)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Service_Date");
            entity.Property(e => e.ServiceHours)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Service_Hours");
            entity.Property(e => e.ServiceName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Service_Name");
            entity.Property(e => e.ServicePrice)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Service_Price");
            entity.Property(e => e.UserName)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
