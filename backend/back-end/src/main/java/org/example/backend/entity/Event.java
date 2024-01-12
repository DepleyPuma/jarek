package org.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String description;
    @OneToMany(mappedBy = "event",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Performer> performers;
    private LocalDateTime dateTime;
    @Lob
    private byte[] image;
    private String place;
}
