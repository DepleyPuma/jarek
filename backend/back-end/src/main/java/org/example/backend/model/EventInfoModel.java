package org.example.backend.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;
@Data
@Builder
public class EventInfoModel {
    private String description;
    private List<String> performers;
}
