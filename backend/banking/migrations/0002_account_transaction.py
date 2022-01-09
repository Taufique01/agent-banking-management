# Generated by Django 4.0 on 2022-01-07 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('banking', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('balance', models.FloatField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('transaction_type', models.CharField(max_length=10)),
                ('amount', models.FloatField()),
                ('paid', models.FloatField()),
                ('note', models.TextField(blank=True, null=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transaction', to='banking.customer')),
                ('paying_account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paying_tnx', to='banking.account')),
                ('receiving_account', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='receive_tnx', to='banking.account')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]