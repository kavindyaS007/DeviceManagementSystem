package com.kavindya.DeviceMngSystem.Model;

import com.kavindya.DeviceMngSystem.Model.Enum.Status;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;

@Entity
@Table(name = "Device_table")
public class Device {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int device_id;

    @Column(nullable = false)
    private String device_name;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status device_status;

    @Column(nullable = false)
    private String device_model;

    @Column
    private LocalTime enrolled_time;

    public Device() {

    }

    public String getDevice_name() {
        return device_name;
    }

    public void setDevice_name(String device_name) {
        this.device_name = device_name;
    }

    public Status getDevice_status() {
        return device_status;
    }

    public void setDevice_status(Status device_status) {
        this.device_status = device_status;
    }

    public String getDevice_model() {
        return device_model;
    }

    public void setDevice_model(String device_model) {
        this.device_model = device_model;
    }

    public LocalTime getEnrolled_time() {
        return enrolled_time;
    }

    public void setEnrolled_time(LocalTime enrolled_time) {
        this.enrolled_time = enrolled_time;
    }

    public int getDevice_id() {
        return device_id;
    }

    public void setDevice_id(int device_id) {
        this.device_id = device_id;
    }
}
