package org.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
@Data
@Builder
@AllArgsConstructor
public class DefaultEventModel {
    private String name;
    private LocalDateTime dateTime;
    private String place;
    private byte[] image;
}
