package com.codeRudi.HotelServer.services.auth;

import com.codeRudi.HotelServer.dto.SignUpRequest;
import com.codeRudi.HotelServer.dto.UserDTO;
import org.springframework.stereotype.Service;

@Service
public interface AuthService {

    UserDTO createUser(SignUpRequest signUpRequest);
}
