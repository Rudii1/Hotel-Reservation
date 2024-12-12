package com.codeRudi.HotelServer.dto;

import com.codeRudi.HotelServer.enums.UserRole;
import lombok.Data;

@Data
public class UserDTO {

    private Long id;

    private String email;

    private String name;

    private UserRole userRole;
}
