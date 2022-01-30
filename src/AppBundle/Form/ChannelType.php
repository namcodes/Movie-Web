<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Intl\Intl;
use Symfony\Component\Form\FormEvents;
class ChannelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder->add('title');
        $builder->add('description');
        $builder->add('featured');
        $builder->add('enabled');
        $builder->add('comment');
        $builder->add('classification');
        $builder->add('website');
        $builder->add('tags');
        $builder->add('playas' ,ChoiceType::class, array(
                'choices' => array(
                    1 => "Free",
                    2 => "Premuim",
                    3 => "Unlock with rewards Ads"
                )));   
        $builder->add("categories",'entity',
                  array(
                        'class' => 'AppBundle:Category',
                        'expanded' => true,
                        "multiple" => "true",
                        'by_reference' => false
                      )
                  );
        $builder->add("countries",'entity',
                  array(
                        'class' => 'AppBundle:Country',
                        'expanded' => true,
                        "multiple" => "true",
                        'by_reference' => false
                      )
                  );
        $builder->add('sourcetype' ,ChoiceType::class, array(
                'choices' => array(
                    1 => "Youtube Url",
                    2 => "m3u8 Url",
                    3 => "MOV Url",
                    4 => "MP4 Url",
                    6 => "MKV Url",
                    7 => "WEBM Url",
                    8 => "Embed source",
                )));
        $builder->add('sourceurl');

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            $article = $event->getData();
            $form = $event->getForm();
            if ($article and null !== $article->getId()) {
                 $form->add("file",null,array("label"=>"","required"=>false));
            }else{
                 $form->add("file",null,array("label"=>"","required"=>true));
            }
        });
        $builder->add('save', 'submit',array("label"=>"SAVE"));

    }
    public function getName()
    {
        return 'Channel';
    }
}
?>