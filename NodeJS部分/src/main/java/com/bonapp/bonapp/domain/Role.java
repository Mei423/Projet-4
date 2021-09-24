package com.bonapp.bonapp.domain;

import java.util.Date;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import javax.persistence.*;



@Data
@Table(name = "role")
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 100)
    private String name;
    @Column(length = 200)
    private String note;
    @CreatedDate
    private Date created;
    @LastModifiedDate
    private Date updated;
    
    
}