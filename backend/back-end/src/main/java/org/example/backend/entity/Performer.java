package org.example.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Performer {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    @ManyToMany
    private List<Event> events;

}
