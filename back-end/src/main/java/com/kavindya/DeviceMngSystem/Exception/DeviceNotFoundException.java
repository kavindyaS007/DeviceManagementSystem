package com.kavindya.DeviceMngSystem.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.kavindya.DeviceMngSystem.Exception.DeviceNotFoundException;
@ControllerAdvice
public class DeviceNotFoundException extends Throwable {

    @ExceptionHandler
    public ResponseEntity<Object> exception(DeviceNotFoundException exception) {
        return new ResponseEntity<>("Device not found", HttpStatus.NOT_FOUND);
    }

}
