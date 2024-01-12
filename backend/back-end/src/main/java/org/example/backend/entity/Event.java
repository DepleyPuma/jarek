package org.example.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Performer> performers;
    private LocalDateTime dateTime;
    @Lob
    private byte[] image;
    private String place;
}
