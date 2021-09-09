package com.meirecette.mss_cooker.modele;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity 
public class Cooker {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String nom;

	private String prenom;

	private Long numeroPersonne;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public Long getNumeroPersonne() {
		return numeroPersonne;
	}

	public void setNumeroPersonne(Long numeroPersonne) {
		this.numeroPersonne = numeroPersonne;
	}
	
	

}