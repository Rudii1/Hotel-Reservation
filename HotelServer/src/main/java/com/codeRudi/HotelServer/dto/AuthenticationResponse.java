package com.codeRudi.HotelServer.dto;

import com.codeRudi.HotelServer.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private Long userId;
    private UserRole userRole;
}
