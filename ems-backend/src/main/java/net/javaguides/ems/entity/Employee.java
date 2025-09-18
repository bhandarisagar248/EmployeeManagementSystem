package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter// to get the following employee Instance
@Setter //to set the Instance value fo the Following class
@NoArgsConstructor //to create non argument constructer or default constructer
@AllArgsConstructor // to create the parameterized constructer
@Entity //indicate the below class is enttity for the database
@Table(name="employee") //indicate the class as table with the name explicitly
public class Employee {

    @Id //indicate the id for the class ;  // auto increment the id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto genterate value for id
    private Long id;

    @Column(name = "name" ,nullable=false)  //defines as the table column and set the name
    private String name;
    @Column(name="email",nullable=false, unique=true)
    private String email;
    @Column(name="phone",nullable=false)
    private String phone;


}
