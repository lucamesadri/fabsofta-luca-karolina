package br.univille.view;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import br.univille.controller.ControllerPessoa;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.lang.ModuleLayer.Controller;
import java.math.BigInteger;

/*Arquitetura MVC- Model, View e Controller
 * 
 * Model - Dados
 * View - Front
 * Controller - Controle de eventos
 */

public class FormPessoa extends JFrame {
    private JButton btnSalvar, btnSair;
    private JLabel lblId, lblNome, lblEndereco;
    private JTextField txtId, txtNome, txtEndereco;

    public FormPessoa(){
        setSize(500, 500);
        setTitle("Minha Janelinha");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        painelCampos();
        painelBotoes();

        setVisible(true);
    }

    private void painelBotoes(){

        ControllerPessoa controller = new ControllerPessoa();

        JPanel painel = new JPanel();
        painel.setLayout(new FlowLayout(FlowLayout.CENTER));
        btnSalvar = new JButton("Salvar");
        painel.add(btnSalvar);
        btnSalvar.addActionListener(controller);

        btnSair = new JButton("Sair");
        btnSair.addActionListener(controller);
        painel.add(btnSair);
        getContentPane().add(painel, "South");




    }

    private void painelCampos(){
        JPanel painel = new JPanel();
        painel.setLayout(new GridLayout(3,2));
        lblId = new JLabel("ID");
        painel.add(lblId);
        txtId = new JTextField(5);
        painel.add(txtId);

        lblNome = new JLabel("Nome");
        painel.add(lblNome);
        txtNome = new JTextField(15);
        painel.add(txtNome);

        lblEndereco = new JLabel("Endereço");
        painel.add(lblEndereco);
        txtEndereco = new JTextField(15);
        painel.add(txtEndereco);

        getContentPane().add(painel, "North");
    }

    public static void main(String[] args) {
        new FormPessoa();
    }


}
