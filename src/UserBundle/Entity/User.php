<?php
// src/AppBundle/Entity/User.php

namespace UserBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use MediaBundle\Entity\Media as Media;
use AppBundle\Entity\Comment as Comment;
use AppBundle\Entity\Rate as Rate;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user_table")
 * @ORM\Entity(repositoryClass="UserBundle\Repository\UserRepository")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
    /** 
    @ORM\Column(name="name", type="string", length=255, nullable=true) 
    */
    protected $name; 



    /** 
    @ORM\Column(name="type", type="string", length=255, nullable=true) 
    */
    protected $type; 

    /** 
    @ORM\Column(name="token", type="text", nullable=true) 
    */
    protected $token; 

    /**
    * @ORM\OneToMany(targetEntity="AppBundle\Entity\Comment", mappedBy="user",cascade={"persist", "remove"})
    * @ORM\OrderBy({"created" = "desc"})
    */
    private $comments;

    /**
    * @ORM\OneToMany(targetEntity="AppBundle\Entity\Rate", mappedBy="user",cascade={"persist", "remove"})
    * @ORM\OrderBy({"created" = "desc"})
    */
    private $ratings;

     /**
     * @ORM\ManyToOne(targetEntity="MediaBundle\Entity\Media")
     * @ORM\JoinColumn(name="media_id", referencedColumnName="id")
     * @ORM\JoinColumn(nullable=true)
     */
    private $media;


    public function __construct()
    {
        parent::__construct();
    }
    /**
    * Get type
    * @return  
    */

    public function getType()
    {
        return $this->type;
    }
    
    /**
    * Set type
    * @return $this
    */
    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }
    /**
    * Get name
    * @return  
    */
    public function getName()
    {
        return $this->name;
    }
    
    /**
    * Set name
    * @return $this
    */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    public function setEmail($email) 
    {
        $this->email = $email;
        $this->username = $email;
    }
    public function __toString()
    {
       return $this->getName();
    }



    /**
    * Get token
    * @return  
    */
    public function getToken()
    {
        return $this->token;
    }
    
    /**
    * Set token
    * @return $this
    */
    public function setToken($token)
    {
        $this->token = $token;
        return $this;
    }

    /**
    * Get media
    * @return  
    */
    public function getMedia()
    {
        return $this->media;
    }
    
    /**
    * Set media
    * @return $this
    */
    public function setMedia(Media $media)
    {
        $this->media = $media;
        return $this;
    }

}