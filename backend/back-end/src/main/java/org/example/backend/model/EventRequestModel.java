package org.example.backend.model;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;
@Data

public class EventRequestModel {
    private String name;
    private String description;
    private LocalDateTime dateTime;
    private String place;
    private List<String> performers;
    private MultipartFile image;
}
